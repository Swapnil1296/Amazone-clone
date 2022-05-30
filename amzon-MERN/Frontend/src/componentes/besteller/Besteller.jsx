import React, { useEffect } from 'react'
import { getProducts } from '../../Redux/action/action';
import {useDispatch, useSelector} from "react-redux"

const Besteller = () => {
    const { products } = useSelector((state) => state.getproductsdata);
    console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])
  return (
    <div>
      Besterseller
    </div>
  )
}

export default Besteller
