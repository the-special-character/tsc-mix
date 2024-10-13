import React from "react";
import { BuilderBlocks, Builder } from "@builder.io/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
  triggerButton?: string;
  modalTitle?: string;
  builderBlock: {
    id: string;
  };
  content: any[];
  attributes: any;
  props: Record<string, any>;
  buttonStyles?: React.CSSProperties; // Add this line
};
const ModalContent = (props: Props) => {
  return (
    <>
      <BuilderBlocks
        parentElementId={props.builderBlock.id}
        blocks={props?.content}
      />
    </>
  );
};

const BIDialog = ({
  triggerButton,
  modalTitle,
  attributes,
  buttonStyles,
  ...props
}: Props) => {
  return (
    <Dialog {...attributes}>
      <DialogTrigger asChild>
        <Button style={buttonStyles} variant={"builderio"}>
          {triggerButton}
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll no-scrollbar">
        {modalTitle && (
          <DialogHeader>
            <DialogTitle>{modalTitle}</DialogTitle>
          </DialogHeader>
        )}
        <div>
          <ModalContent {...props} attributes={attributes} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BIDialog;
