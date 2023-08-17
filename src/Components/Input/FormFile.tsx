import React from "react";
import { useEffect, useState } from "react";

import IsoIcon from "@mui/icons-material/Iso";
import { IconButton } from "@mui/material";

//Styles
import "./FormFile.css";

type propsFormFile = {
  label: string;
  inputName: string;
  isSubmitSuccessful: any;
  register: Function;
  watch: {};
  errors?: { [key: string]: object };
  reset?: any;
  clearErrors?: any;
  avatar?: any;
  unregister?: any;
};

const FormFile = ({
  label,
  inputName,
  register,
  errors,
  clearErrors,
  avatar,
  unregister,
  isSubmitSuccessful,
}: any) => {
  const [image, setimage] = useState<any | null>(null);
  const [prevImage, setprevImage] = useState<object | null | any>(null);
  const [avatarState, setAvatar] = useState<boolean>(true);

  useEffect(() => {
    if (isSubmitSuccessful) {
      setprevImage(null);
      setAvatar(false);
      setimage(null);
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (avatar && !image && !prevImage && avatarState) {
      setAvatar(avatar);
      setprevImage(avatar);
      unregister([inputName]);
    }
  }, [avatar, image, prevImage, avatarState, inputName, unregister]);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setprevImage(reader?.result);
      };
      reader.readAsDataURL(image);
    } else {
      if (!avatarState) {
        setprevImage(null);
      }
    }
  }, [image, avatarState]);

  //Functions
  const handleUploadImg = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setimage(file);
      clearErrors(inputName);
    } else {
      setimage(null);
    }
  };

  return (
    <div className="main-container">
      <label
        htmlFor="last-name"
        className="block text-sm text-center font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="container w-40 h-44 border-2 rounded-lg flex flex-col items-center justify-center relative cursor-pointer">
        <div className="prevImg absolute top-0 right-0 p-1 z-10"></div>
        <label htmlFor={inputName}>
          <div className=" w-36 h-40 rounded-xl flex items-center justify-center overflow-hidden -z-10 cursor-pointer          ">
            {prevImage ? (
              <div className="icon-img relative">
                <img src={prevImage} alt="img" width={100} className="w-full" />
              </div>
            ) : (
              <div className="icon">
                <IconButton size="large">
                  <IsoIcon />
                </IconButton>
              </div>
            )}
          </div>
        </label>

        {avatarState && avatar && !image ? (
          <input
            type="file"
            id={inputName}
            name={inputName}
            className="input-file opacity-0 absolute top-10"
            {...register(inputName)}
            onChange={handleUploadImg}
          />
        ) : (
          <input
            type="file"
            id={inputName}
            name={inputName}
            className="input-file opacity-0 absolute top-10"
            {...register(inputName, {
              required: true,
            })}
            onChange={handleUploadImg}
          />
        )}
      </div>
      {errors && errors[inputName]?.type === "required" && (
        <p className="alert">Fotografia requerida.</p>
      )}
      {errors && errors[inputName]?.type === "validate" && (
        <p className="text-sm text-red-500 text-center">
          {errors && errors[inputName].message}
        </p>
      )}
    </div>
  );
};

export default FormFile;
