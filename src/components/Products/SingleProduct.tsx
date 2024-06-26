import React, { useEffect } from "react";

import Product from "./Product";
import Products from "./Products";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useGetProductQuery } from "../../features/api/apiSlice";

import styles from "../styles/Product.module.css";

const SingleProduct = () => {
    const { id } = useParams();
    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

    useEffect(() => {
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);

    return !data ? (
        <section className="preloader">Loading...</section>
    ) : (
        <>
            <div className={styles.product__wrapper}>
                <Product {...data} />
                <Products amount={5} title="Related products" />
            </div>
        </>
    );


}

export default SingleProduct