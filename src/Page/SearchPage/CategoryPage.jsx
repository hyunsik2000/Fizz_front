import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChallengeFolder from './ChallengeFolder'; // Import the ChallengeFolder component
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryName, categoryId } = useParams();
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // const fetchChallenges = async () => {
    //   try {
    //     const response = await fetch(`https://gunwoo.store/api/challenge/${categoryId}`);
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const data = await response.json();
    //     if (data.success) {
    //       setChallenges(data.data);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching challenges:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchChallenges();

    const testChallenges = [
      {
        challengeId: 1,
        categoryId: 1,
        title: "challenge1",
        participantCounts: 10
      },
      {
        challengeId: 2,
        categoryId: 1,
        title: "challenge2",
        participantCounts: 20
      }
    ];
    setChallenges(testChallenges);
    setLoading(false);
  }, [categoryId]);

  const handleCreateChallenge = () => {
    navigate('/new-post');
  };

  return (
    <div className="category-page-container">
      <h1>{categoryName} 챌린지</h1>
      {loading ? (
        <p>Loading...</p>
      ) : challenges.length > 0 ? (
        <div className="challenges-list">
          {challenges.map((challenge) => (
            <ChallengeFolder
              key={challenge.challengeId}
              title={challenge.title}
              count={challenge.participantCounts}
            />
          ))}
        </div>
      ) : (
        <div className="no-challenges">
          <p>아무도 {categoryName} 챌린지를 시작하지 않았네요... 저희 함께 해봐요!</p>
          <button className="create-challenge-button" onClick={handleCreateChallenge}>게시물 만들기</button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;