import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Flex, Image, } from '@chakra-ui/react'



function CustomLink({children, to, icon }) {
    const location = useLocation()
    const match = location.pathname === to

    return (
        <Link 
            to={to} 
            _focus={{ boxShadow: 'none' }}>
            <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    className={match ? "button " : ""}
                >
                          

                    {icon && (
                        
                            <Image
                                mr="4"
                                src={icon}
                            />
                       
                    )}
                    {children}
                </Flex>
        </Link>
    );
}

export default CustomLink;