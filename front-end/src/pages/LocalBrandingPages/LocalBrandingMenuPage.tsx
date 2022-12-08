import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { DropZoneButton } from "../../components/DropZone/DropZoneButton.tsx";
import { DragAndDropHeadList } from "../../components/DragAndDrop/DragAndDropHeadList.tsx";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

function LocalBrandingMenuPage() {
  const [value, onChange] = useState(initialValue);
  const [imgFiles, setImgFile] = useState([]);
  const [imgFiles64, setImgBase64] = useState([]);
  const handleChangeFile = (files) => {
    console.log(files);
    setImgFile(files);
    //fd.append("file", event.target.files)
    setImgBase64([]);
    for (var i = 0; i < files.length; i++) {
      if (files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          console.log(base64);
          if (base64) {
            //  images.push(base64.toString())
            var base64Sub = base64.toString();

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
            //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
            //  console.log(images)
          }
        };
      }
    }
  };
  return <DropZoneButton handleOnDrop={handleChangeFile}></DropZoneButton>;
}

export default LocalBrandingMenuPage;
