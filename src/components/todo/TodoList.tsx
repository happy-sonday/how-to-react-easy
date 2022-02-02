import React, { useCallback } from 'react';
import '../../sass/TodoList.scss';
import TodoItem from './TodoItem';
import { List } from 'react-virtualized';
/**
 * NOTE: 최적화 방법3
 * 버츄얼 스크롤을적용해서 사용자화면에 보여지는 영역만큼의 아이템만 렌더링해서 보여준다.
 */
const TodoList = (props: any) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const item = props.todos[index];
      return (
        <TodoItem
          todo={item}
          key={key}
          onRemove={props.onRemove}
          onToggle={props.onToggle}
          style={style}
        />
      );
    },
    [props.onRemove, props.onToggle, props.todos]
  );

  return (
    <>
      <List
        className='todo-list'
        width={512} // 전체크기
        height={513} // 전체 높이
        rowCount={props.todos.length} // 항목 개수
        rowHeight={57} // 항목 높이
        rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
        list={props.todos}
        style={{ outline: 'none' }} // List 컴포넌트에 기본 적용되어있는 outline 스타일 제거
      />
    </>
  );
};

export default React.memo(TodoList);
