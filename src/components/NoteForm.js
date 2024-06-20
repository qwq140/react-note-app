import './NoteForm.css';
import {useEffect, useState} from "react";

// CreatePage, EditPage에서 사용할 컴포넌트이다.
// CreatePage
// 전송 버튼의 텍스트를 "작성하기"로 표기

// EditPage
// 전송 버튼의 텍스트를 "수정하기"로 표기
// 기존 데이터를 form에 뿌려줘야 한다.
const NoteForm = ({note, isEditing, onSubmit, onDelete}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(title, content);
    }

    useEffect(() => {
        if(note) {
            setTitle(note.title);
            setContent(note.content);
        }
    }, [note]);

    return (
      <form className="note-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <label htmlFor="contents">Contents</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)}/>
          <button type="submit"> {isEditing ? '수정하기' : '작성하기'} </button>
          {isEditing && <button type="button" className="remove-button" onClick={onDelete}>삭제하기</button>}
      </form>
    );
}

export default NoteForm;