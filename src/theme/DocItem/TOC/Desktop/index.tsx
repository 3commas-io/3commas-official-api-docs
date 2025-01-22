import React from 'react'
import { useDoc } from '@docusaurus/plugin-content-docs/client'
import TOCItems from '@theme/TOCItems'

import styles from './styles.module.css'

export default function DocItemTOCDesktop(): JSX.Element {
  const { toc, frontMatter } = useDoc()

  return (
    <div className={styles.root}>
      <TOCItems
        toc={toc}
        minHeadingLevel={frontMatter.toc_min_heading_level}
        maxHeadingLevel={frontMatter.toc_max_heading_level}
        className={styles.outline}
        linkClassName={styles.outlineLink}
        linkActiveClassName={styles.activeLink}
      />
      <TOCItems
        toc={toc}
        minHeadingLevel={frontMatter.toc_min_heading_level}
        maxHeadingLevel={frontMatter.toc_max_heading_level}
        className={styles.toc}
        linkClassName={styles.tocLink}
        linkActiveClassName={styles.tocLinkActive}
      />
    </div>
  )
}
