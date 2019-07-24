// @flow
import MockAdapter from "axios-mock-adapter";
import {
  fetchProductsApi,
  fetchProductsSaga
} from "../src/redux/actions/productActions";
import apiResponse from "../__mocks__/api-index-response";
import { productFetchMock } from "../__mocks__/setup-fetch-mocks";
import axios from "axios";
import type {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../src/redux/reducers/productsReducer";
import Product from "../src/models/Product";
import type { ProductCollection } from "../src/redux/reducers/productsReducer";
import recordSaga from "../recordSaga";

const mock = productFetchMock();
afterEach(() => mock.reset());

describe("fetchProductsApi", () => {
  it("fetches the products", async () => {
    const products: Object[] = await fetchProductsApi();
    expect(products).toEqual(apiResponse);
  });
});

describe("fetchProductsSaga", () => {
  const products: ProductCollection = Product.collectionFromApiArray(
    apiResponse
  );
  const startAction: FETCH_PRODUCTS_START = { type: "FETCH_PRODUCTS_START" };
  const successAction: FETCH_PRODUCTS_SUCCESS = {
    type: "FETCH_PRODUCTS_SUCCESS",
    products
  };
  const dispatched = recordSaga(fetchProductsSaga, startAction);
  expect(dispatched).toContainEqual(successAction);
});
