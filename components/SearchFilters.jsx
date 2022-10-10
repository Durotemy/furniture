import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import Property from "../components/Property";
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from "../assets/images/noresult.svg";

const SearchFilters = () => {
  return <div>Shows</div>;
};
export default SearchFilters;
