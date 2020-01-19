export const streamer = async (url, percentPropagator) => {
  const response = await fetch(url);

  const reader = response.body.getReader();
  const contentLength = response.header.get("Content-Length");

  let receivedLength = 0;
  let chunks = [];
  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    chunks.push(value);
    receivedLength += value.length;

    const percentReceived = Math.round((contentLength * 100) / receivedLength);
    percentPropagator(percentReceived);
  }

  let chunksAll = new Uint8Array(receivedLength);
  let position = 0;
  for (let chunk of chunks) {
    chunksAll.set(chunk, position);
    position += chunk.length;
  }

  let result = new TextDecoder("utf-8").decode(chunksAll);

  return JSON.parse(result);
};
