import React, { createContext, useState } from "react";
import Info from "../../components/Info";
import "./styles.css";

interface ModalProps {
  name: string;
  region: string;
  capital: string;
  population: number;
  flagImage: string;
}

interface ModalContextProps {
  showModal: (modal: ModalProps) => void;
}

const defaultValue: ModalContextProps = {
  showModal: () => {
    throw new Error("showModal must be defined!");
  },
};

const ModalContext = createContext(defaultValue);
export default ModalContext;

export const ModalProvider: React.FC = ({ children }) => {
  const [modalProps, setModalProps] = useState<ModalProps>();
  const [open, setOpen] = useState(false);

  const contextValue: ModalContextProps = {
    showModal: (modal) => {
      setModalProps(modal);
      setOpen(true);
    },
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {open && (
        <div className="container">
          <div className="content" id="modal-popup">
            <button onClick={handleCloseModal} className="close-button">
              ✖
            </button>
            <img
              className="flag"
              src={modalProps?.flagImage}
              alt="Country Flag"
            />
            <div className="info-data">
              <Info label="Name:" content={modalProps?.name ?? ""} />
              <Info label="Region:" content={modalProps?.region ?? ""} />
              <Info label="Capital:" content={modalProps?.capital ?? ""} />
              <Info
                label="Population:"
                content={modalProps?.population ?? ""}
              />
            </div>
            <button onClick={handleCloseModal} className="accept-button">
              Got it
            </button>
          </div>
        </div>
      )}
      {children}
    </ModalContext.Provider>
  );
};
