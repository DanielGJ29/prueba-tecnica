import "./App.css";
import { useState, useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

//Components
import Products from "./Components/Product/Products";
import CreateProduct from "./Components/Product/CreateProduct";

//Hooks
import { useAppSelector, useAppDispatch } from "./hook/store";
import { useForm, SubmitHandler } from "react-hook-form";

//Firebade
import { uploadFile } from "./firebase/config";

//Action redux
import {
  addProduct,
  updateProduct,
  getByIdProduct,
} from "./redux/slices/product/products";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

type Inputs = {
  sku: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  price: number;
  brand: string;
  partNumber: number;
  family: string;
  motor: string;
  supplier: string;
  status: string;
};

function App() {
  const { singleProduct } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  //const [exampleImg, setExampleImg] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    clearErrors,
    unregister,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    setValue("sku", singleProduct[0]?.sku);
    setValue("name", singleProduct[0]?.name);
    setValue("shortDescription", singleProduct[0]?.shortDescription);
    setValue("description", singleProduct[0]?.description);
    setValue("price", singleProduct[0]?.price);
    setValue("brand", singleProduct[0]?.brand);
    setValue("partNumber", singleProduct[0]?.partNumber);
    setValue("family", singleProduct[0]?.family);
    setValue("motor", singleProduct[0]?.motor);
    setValue("supplier", singleProduct[0]?.supplier);
    setValue("partNumber", singleProduct[0]?.partNumber);
    setValue("category", singleProduct[0]?.category);

    setValue("image", singleProduct[0]?.image);
  }, [setValue, singleProduct]);

  //Functions
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    const result = await uploadFile(data.image);

    if (!result) {
      alert("Ocurrio un error vuelva a intentar");
      return;
    }
    const product = {
      brand: data?.brand,
      description: data?.description,
      family: data?.family,
      image: result,
      category: data?.category,
      motor: data?.motor,
      name: data?.name,
      partNumber: data?.partNumber,
      price: data?.price,
      shortDescription: data?.shortDescription,
      sku: data?.sku,
      supplier: data?.supplier,
      status: "active",
    };
    dispatch(addProduct(product));

    reset();
    handleClose();
  };

  const onSubmitUpdate: SubmitHandler<Inputs> = async (data: any) => {
    const result = await uploadFile(data.image);

    if (!result) {
      alert("Ocurrio un error vuelva a intentar");
      return;
    }
    const product = {
      brand: data?.brand,
      description: data?.description,
      family: data?.family,
      image: result,
      category: data?.category,
      motor: data?.motor,
      name: data?.name,
      partNumber: data?.partNumber,
      price: data?.price,
      shortDescription: data?.shortDescription,
      sku: data?.sku,
      supplier: data?.supplier,
      status: "active",
    };
    dispatch(updateProduct(product));
    reset();
    handleCloseModalUpdate();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const handleCloseModalUpdate = () => {
    reset();
    setOpen2(false);
    setOpen2(false);
  };
  const handleOpenModalUpdate = () => setOpen2(true);

  const handleEditProduct = (id: number) => {
    dispatch(getByIdProduct(id));
    handleOpenModalUpdate();
  };
  return (
    <>
      {/* <div className="App"> */}
      <Container>
        <Typography variant="h3" mt={5} align="center">
          Productos
        </Typography>
        <Box sx={{ pb: 2 }}>
          <Button
            variant="contained"
            onClick={handleOpen}
            startIcon={<LibraryAddIcon />}
          >
            Nuevo Product
          </Button>
        </Box>
        <Products handleEditProduct={handleEditProduct} />

        {/* Modal New Product */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component="form"
            sx={{ ...style, width: 600 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box textAlign="center" mb={2}>
              <IconButton color="primary" aria-label="">
                <LibraryAddIcon />
              </IconButton>
              <Button id="modal-modal-title" variant="text" component="h2">
                Nuevo Registro
              </Button>
            </Box>
            <CreateProduct
              register={register}
              errors={errors}
              watch={watch}
              reset={reset}
              clearErrors={clearErrors}
              avatar={""}
              unregister={unregister}
            />
            <Grid
              mt={0}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button
                type="submit"
                variant="contained"
                startIcon={<SaveIcon />}
              >
                Guardar
              </Button>
            </Grid>
          </Box>
        </Modal>

        {/* Modal Update Product */}
        <Modal
          open={open2}
          onClose={handleCloseModalUpdate}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component="form"
            sx={style}
            onSubmit={handleSubmit(onSubmitUpdate)}
          >
            <Box textAlign="center" mb={2}>
              <IconButton color="primary" aria-label="">
                <EditIcon />
              </IconButton>
              <Button id="modal-modal-title" variant="text" component="h2">
                Update Product
              </Button>
            </Box>
            <CreateProduct
              register={register}
              errors={errors}
              watch={watch}
              reset={reset}
              clearErrors={clearErrors}
              avatar={singleProduct.length > 0 ? singleProduct[0]?.image : ""}
              unregister={unregister}
            />
            <Grid
              mt={2}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button
                type="submit"
                variant="contained"
                startIcon={<SaveIcon />}
              >
                Guardar
              </Button>
            </Grid>
          </Box>
        </Modal>
      </Container>
      {/* </div> */}
    </>
  );
}

export default App;
