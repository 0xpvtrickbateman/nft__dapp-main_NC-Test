const namePrefix = "Wagners Nightmare";
const description = "Non-Fungible Classical Music Album";
const baseUri = "PLACEHOLDER_URI";

const layerConfig = [
  {
    totalTokens: 500,
    layersOrder: [
      { name: "Background", options: { bypassDNA: true } },
      { name: "Overlay" },
      { name: "Album Title" },
      { name: "Head" },
      { name: "Hat" },
      { name: "Wagners Nightmare" },
    ],
  },
  {
    totalTokens: 1000,
    layersOrder: [
      { name: "Background", options: { bypassDNA: true } },
      { name: "Overlay" },
      { name: "Album Title" },
      { name: "Head" },
      { name: "Hat" },
      { name: "Left Hand" },
      { name: "Item" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  uniqueDnaTorrance,
  layerConfig,
  rarityDelimiter,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  namePrefix,
};
