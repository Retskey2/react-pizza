import React from "react";
import classNames from "classnames";

function Button({children, outline, className,onClickAddPizza}) {
    return (
        <button
            onClick={onClickAddPizza}
            className={classNames('button', className,
            {'button--outline': outline,}
        )}>
            {children}
        </button>
    );
}

export default Button;