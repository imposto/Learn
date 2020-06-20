import React from 'react'

export function childrenWhithProps(props){
    return React.Children.map(props.children, child =>{
        return React.cloneElement(child,{
            ...props, ...child.props
        })
    })

}
