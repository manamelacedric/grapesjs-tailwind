import loadBlocks from "./blocks";
import loadCommands from "./commands";

export default (editor, opts = {}) => {
  const options = {
    ...{
      config: {},
      cover: `img.object-cover { filter: sepia(1) hue-rotate(190deg) opacity(.46) grayscale(.7) !important; }`,
      changeThemeText: "Change Theme",
    },
    ...opts,
  };

  loadBlocks(editor, options);
  loadCommands(editor, options);
};
