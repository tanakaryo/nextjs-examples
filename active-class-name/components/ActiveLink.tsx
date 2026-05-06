"use client";

import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// リンク先URLを文字列として抽出するヘルパー関数
const getLinkUrl 
  // 引数定義: href, as(Optional)
= (href: LinkProps["href"], as?: LinkProps["as"]): string => {

    if (as) return as.toString();
    return href.toString();
}


// &でLinkPropsの元のpropertyに追加する
type ActiveLinkProps = LinkProps & {
    className?: string; // Optional
    activeClassName: string;
};

// 関数コンポーネントを代入した定数宣言
const ActiveLink = ({
    children, //リンク内のテキストや要素
    activeClassName, // アクティブ時に適用したいCSSクラス名
    className, // 通常時のCSSクラス名
    ...props // スプレッド演算子(その他のNext.js Linkコンポーネントに渡す属性(hrefなど))
}: PropsWithChildren<ActiveLinkProps>) => {
    // Next.jsの組み込みhook。現在ユーザーがブラウザで開いているURLのパス名をリアルタイムで取得する
    const pathname = usePathname();
    // クラス名の状態管理
    const [computedClassName, setComputedClassName] = useState(className);

    useEffect(() => {
        if(pathname) {
            const linkUrl = getLinkUrl(props.href, props.as);
            
            const linkPathname = new URL(linkUrl, location.href).pathname;
            const activePathname = new URL(pathname, location.href).pathname;

            const newClassName = linkPathname === activePathname ? `${className} ${activeClassName}`.trim() : className;

            if (newClassName !== computedClassName) {
                setComputedClassName(newClassName);
            }
        }
    }, 
    // この値のいずれかが変わったら再処理
    [
        pathname,
        props.as,
        props.href,
        activeClassName,
        className,
        computedClassName,
    ]);

    return (
        <Link className={computedClassName} {...props}>
            {children}
        </Link>
    );
};

export default ActiveLink;