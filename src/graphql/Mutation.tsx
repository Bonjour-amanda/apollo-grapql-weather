import { gql } from "@apollo/client";

export const SUBMIT_REVIEW_QUERY = gql`
mutation Mutation($submitReviewLocationReview: LocationReviewInput) {
    submitReview(locationReview: $submitReviewLocationReview) {
      success
      message
      locationReview {
        id
      }
    }
  }  
`
