import React, { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const depankananColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const depankiriColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const kancingColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const tangankananColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const tangankiriColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const kerahColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const bahuColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const belakangColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const depanColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const bawahColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const hiasanColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const atasColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const kakikananColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const kakikiriColors = [
  { color: "#7469B6", name: "ungu" },
  { color: "#EBF400", name: "kuning" },
  { color: "#FE0000", name: "merah" },
];

export const CustomizationalProvider = ({ children }) => {
  const [takeScreenshot, setTakeScreenshot] = useState(false);
  const [material, setMaterial] = useState("textures");
  const [uploadedTextureURL, setUploadedTextureURL] = useState(null);
  const [belakangTextureURL, setBelakangTextureURL] = useState(null);
  const [bahuTextureURL, setBahuTextureURL] = useState(null);
  const [depankananTextureURL, setDepankananTextureURL] = useState(null);
  const [depankiriTextureURL, setDepankiriTextureURL] = useState(null);
  const [kancingTextureURL, setKancingTextureURL] = useState(null);
  const [tangankananTextureURL, setTangankananTextureURL] = useState(null);
  const [tangankiriTextureURL, setTangankiriTextureURL] = useState(null);
  const [kerahTextureURL, setKerahTextureURL] = useState(null);
  const [depankananColor, setDepankananColor] = useState(depankananColors[0]);
  const [depankiriColor, setDepankiriColor] = useState(depankiriColors[0]);
  const [kancingColor, setKancingColor] = useState(kancingColors[0]);
  const [tangankananColor, setTangankananColor] = useState(tangankananColors[0]);
  const [tangankiriColor, setTangankiriColor] = useState(tangankiriColors[0]);
  const [kerahColor, setKerahColor] = useState(kerahColors[0]);
  const [bahuColor, setBahuColor] = useState(bahuColors[0]);
  const [belakangColor, setBelakangColor] = useState(belakangColors[0]);
  const [depanColor, setDepanColor] = useState(depanColors[0]);
  const [bawahColor, setBawahColor] = useState(bawahColors[0]);
  const [hiasanColor, setHiasanColor] = useState(hiasanColors[0]);
  const [atasColor, setAtasColor] = useState(atasColors[0]);
  const [kakikananColor, setKakikananColor] = useState(kakikananColors[0]);
  const [kakikiriColor, setKakikiriColor] = useState(kakikiriColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        uploadedTextureURL,
        setUploadedTextureURL,
        belakangTextureURL,
        setBelakangTextureURL,
        bahuTextureURL,
        setBahuTextureURL,
        depankananTextureURL,
        setDepankananTextureURL,
        depankiriTextureURL,
        setDepankiriTextureURL,
        kancingTextureURL,
        setKancingTextureURL,
        tangankananTextureURL,
        setTangankananTextureURL,
        tangankiriTextureURL,
        setTangankiriTextureURL,
        kerahTextureURL,
        setKerahTextureURL,
        bahuColor,
        setBahuColor,
        belakangColor,
        setBelakangColor,
        depankananColor,
        setDepankananColor,
        depankiriColor,
        setDepankiriColor,
        kancingColor,
        setKancingColor,
        tangankananColor,
        setTangankananColor,
        tangankiriColor,
        setTangankiriColor,
        kerahColor,
        setKerahColor,
        bahuColor,
        setBahuColor,
        belakangColor,
        setBelakangColor,
        depanColor,
        setDepanColor,
        bawahColor,
        setBawahColor,
        hiasanColor,
        setHiasanColor,
        atasColor,
        setAtasColor,
        kakikananColor,
        setKakikananColor,
        kakikiriColor,
        setKakikiriColor,
        takeScreenshot,
        setTakeScreenshot,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  return useContext(CustomizationContext);
};
