const NoteAppTemplate = ({children}) => {
    return (
        <div className="note-app">
            <header>
                <h1>Notes App</h1>
                <p>Take notes and never forget</p>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default NoteAppTemplate;