import React, { useEffect } from "react";

import Product from "./Film";
import Products from "./Films";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../router";
import { useGetProductQuery } from "../redux/apiSlice";


const SingleProduct = (item) => {
    const { id } = useParams();
    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
    const { poster, name, description, year, movieLength
    } = item;

    useEffect(() => {
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);

    return !data ? (
        <section >Loading...</section>
    ) : (
        <>
            <div >
                <Product {...data} />
                <img width='250' src={poster?.url} alt="" />
                <Products amount={5} title="Related products" />
            </div>
        </>
    );


}

export default SingleProduct