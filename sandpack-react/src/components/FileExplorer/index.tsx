import * as React from "react";

import { useSandpack } from "../../hooks/useSandpack";
import { css, THEME_PREFIX } from "../../styles";
import { classNames } from "../../utils/classNames";
import { stackClassName } from "../common";

import { ModuleList } from "./ModuleList";

const fileExplorerClassName = css({
  padding: "$space$3",
  overflow: "auto",
  height: "100%",
});

export interface SandpackFileExplorerProp {
  /**
   * enable auto hidden file in file explorer
   *
   * @description set with hidden property in files property
   * @default false
   */
  autoHiddenFiles?: boolean;
}

/**
 * @category Components
 */
export const SandpackFileExplorer = ({
  className,
  autoHiddenFiles = false,
  ...props
}: SandpackFileExplorerProp &
  React.HTMLAttributes<HTMLDivElement>): JSX.Element | null => {
  const { sandpack } = useSandpack();

  return (
    <div
      className={classNames(
        stackClassName,
        fileExplorerClassName,
        `${THEME_PREFIX}-file-explorer`,
        className
      )}
      {...props}
    >
      <ModuleList
        activeFile={sandpack.activeFile}
        autoHiddenFiles={autoHiddenFiles}
        files={sandpack.files}
        prefixedPath="/"
        selectFile={sandpack.openFile}
        visibleFiles={sandpack.visibleFilesFromProps}
      />
    </div>
  );
};
