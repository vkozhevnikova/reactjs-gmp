export interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handlerModal: (state: boolean) => void;
}
