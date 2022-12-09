import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import {
  Container,
  Flex,
  UnstyledButton,
  ActionIcon,
  Button,
} from "@mantine/core";
import GridLayout_2_1 from "../../Layout/GridLayout_2_1";
import ToastEditor from "../../components/Editor/ToastEditor";
import { IconDatabase } from "@tabler/icons";
const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

function HeadToolTips({ height }) {
  return (
    <div style={{height: height }}>
      <Flex>
        <Button.Group>
          <UnstyledButton variant="white">
            <ActionIcon>
              <IconDatabase size={16} />
            </ActionIcon>
          </UnstyledButton>
          <UnstyledButton variant="white">
            <ActionIcon>
              <IconDatabase size={16} />
            </ActionIcon>
          </UnstyledButton>
          <UnstyledButton variant="white">
            <ActionIcon>
              <IconDatabase size={16} />
            </ActionIcon>
          </UnstyledButton>
          <UnstyledButton variant="white">
            <ActionIcon>
              <IconDatabase size={16} />
            </ActionIcon>
          </UnstyledButton>
          <UnstyledButton variant="white">
            <ActionIcon>
              <IconDatabase size={16} />
            </ActionIcon>
          </UnstyledButton>
        </Button.Group>
      </Flex>
    </div>
  );
}

function LocalBrandStoryPage() {
  const [value, onChange] = useState(initialValue);

  return (
    <>
      <div style={{ width: "100%" }}>
        <HeadToolTips height="6vh" />
        <ToastEditor height={"95vh"} />
      </div>
    </>
  );
}

export default LocalBrandStoryPage;
