import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from './Product';
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Title = styled.h1`
    display: inline-block;
    width: 450px;
    font-size: 70px;
    color: #01634df4;
    padding: 30px;

    &:hover{
        background-color: rgba(0, 0, 0, 0.4);
        color: white;
        padding: 30px 80px;
        transition: all 0.9s ease;
        border-radius: 10px;
    }
`

const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat
                    ? `http://localhost:5000/api/products?category=${cat}`
                    : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
            } catch (err) {}
        };
        getProducts()
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <>
            <Title>Our products :</Title>
        <Container>
            {cat
                ? filteredProducts.map((item) => <Product key={item.id} item={item} />)
                : products
                    .slice(0, 8)
                    .map((item) => <Product key={item.id} item={item} />)}
        </Container>
        </>
        
    );
};

export default Products;
