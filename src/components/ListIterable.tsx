import React, { useState } from 'react';

const ListIterable = () => {
  const [users, setUsers] = useState([
    { id: 1, text: '해피' },
    { id: 2, text: '데이' },
    { id: 3, text: '제이슨' },
    { id: 4, text: '샤인' },
  ]);

  const [input, setInput] = useState('');

  //NOTE: 유저추가 새로운 배여을 반환하는 concat 메서드를 사용
  const addUser = () => {
    if (!input) {
      alert('유저명을 입력해주세요');
      return;
    }

    setUsers(users.concat({ id: users.length + 1, text: input }));

    setInput('');
  };

  const onChange = (str: string) => {
    setInput(str);
  };

  const handleKeyPress = (key: string) => {
    if (key === 'Enter') {
      addUser();
    }
  };
  return (
    <>
      <h1>Iterable CRUD</h1>
      <input
        type='text'
        value={input}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e.key)}
      />
      <button onClick={addUser}>유저 추가</button>
      {users.map((user) => (
        <li key={user.id}>{user.text}</li>
      ))}
    </>
  );
};

export default ListIterable;
