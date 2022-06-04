const photoGenerationImage = require("../../assets/photogeneration.PNG");
const beatMakerImage = require("../../assets/beatmaker.PNG");
const skyEnviroImage = require("../..//assets/skyenviro.PNG");

const MiniProjectsInfo = () => {
  return [
    {
      name: "Photo Generation",
      imageURL: photoGenerationImage,
      description: "Search a topic and get related pictures via API fetch",
      features: "expand result | author link | image download",
      url: null,
    },
    {
      name: "Beat Maker",
      imageURL: beatMakerImage,
      description: "Create your own electronic beats",
      features: "BPM range | instrument selection | basic controls",
      url: null,
    },
    {
      name: "SkyEnviro",
      imageURL: skyEnviroImage,
      description: "Get the weather for any city",
      features: "PWA | search input | search history",
      url: null,
    },
  ];
};

export default MiniProjectsInfo;
