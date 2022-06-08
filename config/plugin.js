module.exports = () => {
    return {
        ckeditor: {
            enabled: true,
            config: {
                editor: {
                    removePlugins: ['Markdown'],
                    toolbar: {
                        items: [
                            'paragraph',
                            'heading1',
                            'heading2',
                            'heading3',
                            '|',
                            'bold',
                            'italic',
                            'fontColor',
                            'fontFamily',
                            'underline',
                            'fontSize',
                            'removeFormat',
                            '|',
                            'bulletedList',
                            'todoList',
                            'numberedList',
                            '|',
                            'alignment',
                            'outdent',
                            'indent',
                            'horizontalLine',
                            '|',
                            'StrapiMediaLib',
                            'blockQuote',
                            'link',
                            '|',
                            'heading',
                            "fullScreen",
                            'undo',
                            'redo'
                        ]
                    },
                }
            }
        }
    }
}