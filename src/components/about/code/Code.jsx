import './code.scss';

function Code() {
    const infos = [
        "/*",
        "* Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "* Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
        "* Quisque tincidunt ipsum eu justo vulputate, eget feugiat tortor posuere.",
        "* Sed auctor ipsum at metus convallis, a dapibus lectus finibus.",
        "* Integer euismod ipsum id ligula cursus, nec varius lectus sollicitudin.",
        "* Nulla facilisi. Duis ipsum lacus, ultrices at justo at, bibendum vehicula elit.",
        "* Praesent eget odio eu ipsum feugiat tincidunt vel a leo.",
        "* Morbi placerat ipsum vel nulla tincidunt, at scelerisque neque tristique.",
        "* Ut venenatis ipsum eu mi auctor, in porta dui fermentum.",
        "* Sed congue ipsum in nisi auctor, ac vehicula lectus vestibulum.",
        "*/"
    ];

    return (
        <div className='code'>
            {infos.map((text, index) => (
                <div className='code_line' key={index}>
                    <div className='code_line_num'>{index + 1}</div>
                    <div className='code_line_txt'>{text}</div>
                </div>
            ))}
        </div>
    );
}

export default Code;
