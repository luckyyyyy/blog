/**
 * This file is part of the Blog.
 * @author   : William Chan (root@williamchan.me)
 */

import React from 'react';
import Header from '@/components/header'
import './index.less'

export default (props: any) => {
  return (
    < >
      <Header />
      { props.children }
    </>
  )
}
