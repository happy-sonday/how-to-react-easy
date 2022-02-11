import React from 'react';
import { useParams } from 'react-router-dom';

const data: any = {
  happy: {
    name: 'sonday',
    desc: '프론트엔드 개발자',
  },
  gildong: {
    name: '홍길동',
    desc: '한국 고전 소설 주인공',
  },
};

const Profile = () => {
  // NOTE: Route에서 url에 :field명으로 전달한 파라미터값
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>

      <p>
        {profile ? (
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.desc}</p>
          </div>
        ) : (
          ''
        )}
      </p>
    </div>
  );
};

export default Profile;
