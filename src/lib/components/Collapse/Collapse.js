import React, { useState, useEffect } from 'react';
import { bool, node, string } from 'prop-types';

import styles from './Collapse.module.scss';

const Collapse = ({ title, children, collapsed: beginCollapsed }) => {
  const [collapsed, setCollapsed] = useState(beginCollapsed);
  const toggleCollapse = () => setCollapsed(!collapsed);

  useEffect(() => {
    setCollapsed(beginCollapsed);
  }, [beginCollapsed]);

  return (
    <div>
      <button type="button" className={styles.button} onClick={toggleCollapse}>
        <div>
          {title}
        </div>
        <div className={styles.right}>
          {collapsed ? '+' : '-'}
        </div>
      </button>
      {collapsed ? null : children}
    </div>
  );
};

Collapse.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  collapsed: bool,
};

Collapse.defaultProps = {
  collapsed: true,
};

export default Collapse;
