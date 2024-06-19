import './NoteForm.css';

// CreatePage, EditPage에서 사용할 컴포넌트이다.
// CreatePage에서는 전송 버튼의 텍스트가 "작성하기"
// EditPage에서는 전송 버튼의 텍스트가 "수정하기"
const NoteForm = ({isEditing}) => {

    return (
      <form className="note-form">
          <label htmlFor="title">Title</label>
          <input type="text" id="title"/>
          <label htmlFor="contents">Contents</label>
          <textarea id="content"/>
          <button type="submit"> {isEditing ? '수정하기' : '작성하기'} </button>
      </form>
    );
}

export default NoteForm;