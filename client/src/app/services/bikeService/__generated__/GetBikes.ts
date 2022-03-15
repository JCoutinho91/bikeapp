/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBikes
// ====================================================

export interface GetBikes_bikes {
  __typename: "Bike";
  id: string;
  name: string;
  dailyPrice: number;
  monthlyPrice: number;
  year: number;
  fabrication: string;
  thumbnailSrc: string;
  size: string;
}

export interface GetBikes {
  bikes: GetBikes_bikes[];
}
