import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import '../../sass/TodoItem.scss';

const TodoItem = (props: any) => {
  const { id, text, checked } = props.todo;

  return (
    <div className='todo-item-virtualized' style={props.style}>
      <div
        className={`checkbox ${checked ? 'checked' : ''}`}
        onClick={() => props.onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => props.onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

/**
 * NOTE: 최적화 방법2
 * 리스트 내에 특정아이템만 변경된 경우 해당 아이템만 리렌더링되어야 하지만
 * 나머지 부모컴포넌트 리스트에 종속된 아이템 모두 리렌더링안해도 되는 상황인데 모두 리렌더링되서 느려지는것
 * React.memo를 사용했을 때 props가 바뀌었는지 혹은 바뀌지 않았는지 알아내서 리렌더링 성능을 최적화해 줄 수 있다.
 *
 * 불변성을 지켜야하는것은 깊은복사 서로 메모리주소를 참조하지않은 객체
 * 내부에서 값이 새로워져도 바뀐것을 비교 또는 감지하지 못하기때문에 React.memo 최적화하는 것이 불가능
 * 복잡한 객체구조를 가진경우 immer라는 라이브러리를 도움받아서 작업
 *
 */
export default React.memo(
  TodoItem,
  (prevProps, nextProps) => prevProps === nextProps
);
