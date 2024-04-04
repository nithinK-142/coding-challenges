import { FileNode, fileTree } from "@/constants/fileTree";
import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretRight } from "react-icons/ai";

const ExplorerComponent = ({ data }: { data: FileNode }) => {
  const [itemClicked, setItemClicked] = useState(false);
  return (
    <>
      <p
        onClick={() => setItemClicked((prev) => !prev)}
        className="flex items-center"
      >
        {data.isFolder &&
          (itemClicked ? <AiOutlineCaretDown /> : <AiOutlineCaretRight />)}
        <span className={`${data.isFolder && "cursor-pointer"}`}>
          {data.name}
        </span>
      </p>
      <div className={`${itemClicked ? "block" : "hidden"}`}>
        {data.isFolder && (
          <div className="ml-4">
            {data.children?.map((item) => (
              <ExplorerComponent key={item.name} data={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const Explorer = () => {
  return (
    <div className="ml-44">
      <ExplorerComponent data={fileTree} />
    </div>
  );
};

export default Explorer;
