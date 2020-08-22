import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
export default function Editor({ setContext }) {
	return (
		<AceEditor
			mode="html"
			theme="monokai"
			onChange={setContext}
			name="editor"
			width="100%"
			height="100%"
			fontSize={14}
			editorProps={{ $blockScrolling: true }}
			showPrintMargin={true}
			showGutter={true}
            highlightActiveLine={true}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: false,
				showLineNumbers: true,
				tabSize: 4,
			}}
		/>
	);
}
