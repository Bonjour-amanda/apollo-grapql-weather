import React, {useState} from 'react';
import { useLazyQuery, useQuery, useMutation } from '@apollo/client';
import { SUBMIT_REVIEW_QUERY } from '../graphql/Mutation';

const Review = () => {
    // let input:any;
    
    const [comment, setComment] = useState<any>();
    const [rating, setRating] = useState<any>();
    const [id, setId] = useState<any>();
    
    const [addReview, { data, loading, error }] = useMutation(SUBMIT_REVIEW_QUERY);

    if (loading) return <h1>'Submitting...'</h1>;
    if (error) return <h1>`Submission error! ${error.message}`</h1>;

    console.log('COMMENT', comment)
    const onSubmit = () => {
        addReview({ variables: { input : { submitReviewLocationReview: { comment: comment, rating: rating, locationId: id} }  } } )
    }

    return (
        <div>
               <input 
                type="text" 
                placeholder="Input Comment Here..."
                value={comment}
                onChange={(e:any) => setComment(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Input Rating Here..."
                value={rating}
                onChange={(e:any) => setRating(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Input Location Id Here..."
                value={id}
                onChange={(e:any) => setId(e.target.value)}
                />
                <button type="submit" onClick={() => onSubmit()}>Add Review</button>

                <h1>{data?.submitReview.message === "success" ? "Your Review has been successfully added" : ""}</h1>
    </div>
    );
}
export default Review;
