import React from "react";

//Material Ui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//Componet
import FormInput from "../Input/FormInput";
import FormFile from "../Input/FormFile";

type propsCreateProduct = {
  register: Function;
  watch: {};
  errors?: { [key: string]: object };
  reset?: any;
  clearErrors?: any;
  avatar?: any;
  unregister?: any;
};

const CreateProduct = ({
  register,
  errors,
  watch,
  reset,
  clearErrors,
  avatar,
  unregister,
}: propsCreateProduct) => {
  return (
    <Box>
      <div>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <FormFile
              label={"Imagen"}
              errors={errors}
              reset={reset}
              clearErrors={clearErrors}
              inputName={"image"}
              register={register}
              avatar={avatar}
              unregister={unregister}
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"SKU"}
              name={"sku"}
              placeholder={"sku"}
              type={"text"}
              validate={{
                required: true,
              }}
              watch={watch}
              messageError={{
                required: "sku corta Requerida.",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"Nombre"}
              name={"name"}
              placeholder={"nombre"}
              type={"text"}
              validate={{
                required: true,
                //pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              }}
              watch={watch}
              messageError={{
                required: "No. de serie requerido.",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"Descripción corta"}
              name={"shortDescription"}
              placeholder={"descripción corta"}
              type={"text"}
              validate={{
                required: true,
              }}
              watch={watch}
              messageError={{
                required: "Descripcion corta Requerida.",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"Descripción"}
              name={"description"}
              placeholder={"descripción"}
              type={"text"}
              validate={{
                required: true,
                //pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              }}
              watch={watch}
              messageError={{
                required: "descripción requerido.",
                //pattern: "formato de correo invalido.",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"Categoría"}
              name={"category"}
              placeholder={"categoría"}
              type={"text"}
              validate={{
                required: true,
              }}
              watch={watch}
              messageError={{
                required: "Categoria requerido.",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"Precio"}
              name={"price"}
              placeholder={"precio"}
              type={"text"}
              validate={{
                required: true,
              }}
              watch={watch}
              messageError={{
                required: "Precio requerido.",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"Marca"}
              name={"brand"}
              placeholder={"Marca"}
              type={"text"}
              validate={{
                required: true,
              }}
              watch={watch}
              messageError={{
                required: "Marca requerido.",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"Numero de parte"}
              name={"partNumber"}
              placeholder={"numero de parte"}
              type={"text"}
              validate={{
                required: true,
              }}
              watch={watch}
              messageError={{
                required: "numero de parte requerido.",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"Familia"}
              name={"family"}
              placeholder={"familia"}
              type={"text"}
              validate={{
                required: true,
              }}
              watch={watch}
              messageError={{
                required: "Familia requerido.",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"Motor"}
              name={"motor"}
              placeholder={"motor"}
              type={"text"}
              validate={{
                required: true,
              }}
              watch={watch}
              messageError={{
                required: "Motor requerido.",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              register={register}
              errors={errors}
              label={"Proveedor"}
              name={"supplier"}
              placeholder={"Proveedor"}
              type={"text"}
              validate={{
                required: true,
              }}
              watch={watch}
              messageError={{
                required: "Proveedor requerido.",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default CreateProduct;
