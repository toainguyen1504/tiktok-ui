import Tippy from '@tippyjs/react/headless';
import PropTypes, { func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <div className={cx('preview')}>
            <AccountPreview />
          </div>
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[500, 0]} offset={[-20, 0]} render={renderPreview} placement="bottom">
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/67b2c13baa6e3e7b2b387472bce8953c.jpeg?lk3s=a5d48078&nonce=67885&refresh_token=3636cdcbd67686d73eeab83485901fff&x-expires=1729126800&x-signature=ehp9HRdHUq7jTnMe8wFirjSB1Fo%3D&shp=a5d48078&shcp=81f88b70"
            alt="img"
          />

          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>quocnguyenphu</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Quoc Nguyen Phu</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
