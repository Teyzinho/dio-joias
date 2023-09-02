"use client"

import { useEffect, useState } from "react";
import axios from 'axios';

import Container from "../ui/Container"
import {  Recomended } from "@/types";
import Products from "./Products";

type Props = {
  slug: string
}

const RecomendedProduct = ({slug}: Props) => {
  const [products, setProducts] = useState<null | Recomended>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://job.risestudio.com.br/stocks/${slug}`,
        );
        setProducts(response.data.data.recomended);

        console.log(response.data.data.recomended);
      } catch (error) {}
    };

    fetchPosts();
  }, [slug]);

  if (!products) {
    return <div>Sem recomençacões</div>;
  }
  return (
    <Container>
      <h2>Produtos relacionados</h2>

    </Container>
  )
}

export default RecomendedProduct
