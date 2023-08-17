import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

//Hooks
import { useAppSelector, useAppDispatch } from "../../hook/store";

//Action redux
import { deleteProduct } from "../../redux/slices/product/products";

type PropProduct = {
  handleEditProduct(id: number): void;
};

const Products = ({ handleEditProduct }: PropProduct) => {
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 10,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 11,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  type ProductId = number;

  //Function
  const handleDeleteProduct = (id: ProductId) => {
    dispatch(deleteProduct(id));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SKU</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Descripción corta</StyledTableCell>
            <StyledTableCell align="right">Descripción</StyledTableCell>
            <StyledTableCell align="right">Categoría</StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
            <StyledTableCell align="right">Marca</StyledTableCell>
            <StyledTableCell align="right">Número de parte</StyledTableCell>
            <StyledTableCell align="right">Familia</StyledTableCell>
            <StyledTableCell align="right">Motor</StyledTableCell>
            <StyledTableCell align="right">Proveedor</StyledTableCell>
            <StyledTableCell align="right">Imágenes</StyledTableCell>
            <StyledTableCell align="right">Acción</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.sku}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.shortDescription}
              </StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>

              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.brand}</StyledTableCell>
              <StyledTableCell align="right">{row.partNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.family}</StyledTableCell>
              <StyledTableCell align="right">{row.motor}</StyledTableCell>
              <StyledTableCell align="right">{row.supplier}</StyledTableCell>
              <StyledTableCell align="center">
                <Avatar alt="Remy Sharp">
                  <img src={row.image} alt="" />
                </Avatar>
              </StyledTableCell>

              <StyledTableCell align="right">
                <Grid
                  container
                  rowSpacing={0}
                  columnSpacing={4}
                  justifyContent="center"
                >
                  <Grid xs={6}>
                    <IconButton
                      color="error"
                      aria-label="Delete"
                      onClick={() => handleDeleteProduct(row.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Grid>
                  <Grid xs={6}>
                    <IconButton
                      color="warning"
                      aria-label="Edit"
                      onClick={() => handleEditProduct(row.id)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Products;
