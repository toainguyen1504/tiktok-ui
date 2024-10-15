import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/2a7f84a25e903487ce5aa2ca0a0f1d78~c5_300x300.webp?lk3s=a5d48078&nonce=6623&refresh_token=7fb4c76ffa38a7f7e9ba49753ecc2756&x-expires=1729047600&x-signature=BtKc0DUPqoCBUPLE0fsfzk9TBqI%3D&shp=a5d48078&shcp=c1333099"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          Nguyen Van a
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
