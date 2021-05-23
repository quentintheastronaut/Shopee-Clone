import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.PureComponent {

    render(){
        return(
            <div className="footer">
                <div className="footer__hr"></div>

                <div className="footer__info">
                    <div className="footer__info__script">
                        <div className="footer__info__script__title">
                            SHOPEE - MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN
                        </div>
                        <div className="footer__info__script__content">
                            Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shopee.vn là một sự lựa chọn hiệu quả dành cho bạn. Bản chất của Shopee là một social ecommerce platform - nền tảng trang web thương mại điện tử tích hợp mạng xã hội. Điều này cho phép người mua và người bán hàng dễ dàng tương tác, trao đổi thông tin về sản phẩm và chương trình khuyến mãi của shop. Nhờ nền tảng đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí tưởng dành cho bạn. Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tùy chọn các tính năng “Shop tạm nghỉ” hoặc tự tạo riêng cho mình một chương trình khuyến mãi để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại Shopee Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.
                        </div>
                    </div>
                    <div className="footer__info__script">
                        <div className="footer__info__script__title">
                            TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI
                        </div>
                        <div className="footer__info__script__content">
                            Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc, mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như đăng sản phẩm bán hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng dụng Shopee còn có những ưu điểm sau: - Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm, giỏ hàng hoặc tính năng chat liền tay. - Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người bán hàng rất linh hoạt, dễ dàng. - Cập nhập thông tin khuyến mãi, Shopee flash sale nhanh chóng và liên tục. Tại Shopee, bạn có thể lấy các mã khuyến mãi, mã giảm giá Shopee và mã miễn phí vận chuyển toàn quốc. Bên cạnh đó, Shopee cũng sẽ có những chiến dịch khuyến mãi lớn hằng năm như Shopee 9.9 sale, Shopee 10.10 sale, Shopee 11.11 sale, Shopee 12.12 sale, Shopee Tết Sale. Đây là thời điểm để người mua hàng có thể nhanh tay chọn ngay cho mình những mặt hàng ưa thích với mức giá giảm kỉ lục.                        </div>
                        </div>
                    <div className="footer__info__script">
                        <div className="footer__info__script__title">
                            MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI SHOPEE
                        </div>
                        <div className="footer__info__script__content">
                            Mua hàng trên Shopee luôn là một trải nghiệm ấn tượng. Dù bạn đang có nhu cầu mua bất kỳ mặt hàng thời trang nam, thời trang nữ, đồng hồ, điện thoại, nước rửa tay khô hay khẩu trang N95 thì Shopee cũng sẽ đảm bảo cung cấp cho bạn những sản phẩm ưng ý. Bên cạnh đó, Shopee cũng có sự tham gia của các thương hiệu hàng đầu thế giới ở đa dạng nhiều lĩnh vực khác nhau. Trong đó có thể kể đến Samsung, OPPO, Xiaomi, Innisfree, Unilever, P&G, Biti’s,...Các thương hiệu này hiện cũng đã có cửa hàng chính thức trên Shopee Mall với hàng trăm mặt hàng chính hãng, được cập nhập liên tục. Là một kênh bán hàng uy tín, Shopee luôn cam kết mang lại cho khách hàng những trải nghiệm mua sắm online giá rẻ, an toàn và tin cậy. Mọi thông tin về người bán và người mua đều được bảo mật tuyệt đối. Các hoạt động giao dịch thanh toán tại Shopee luôn được đảm bảo diễn ra nhanh chóng, an toàn. Một vấn đề nữa khiến cho các khách hàng luôn quan tâm đó chính là mua hàng trên Shopee có đảm bảo không. Shopee luôn cam kết mọi sản phẩm trên Shopee, đặc biệt là Shopee Mall đều là những sản phẩm chính hãng, đầy đủ tem nhãn, bảo hành từ nhà bán hàng. Ngoài ra, Shopee bảo vệ người mua và người bán bằng cách giữ số tiền giao dịch đến khi người mua xác nhận đồng ý với đơn hàng và không có yêu cầu khiếu nại, trả hàng hay hoàn tiền nào. Thanh toán sau đó sẽ được chuyển đến cho người bán. Đến với Shopee ngay hôm nay để mua hàng online giá rẻ và trải nghiệm dịch vụ chăm sóc khách hàng tuyệt vời tại đây. Đặc biệt khi mua sắm trên Shopee Mall, bạn sẽ được miễn phí vận chuyển, giao hàng tận nơi và 7 ngày miễn phí trả hàng. Ngoài ra, khách hàng có thể sử dụng Shopee Xu để đổi lấy mã giảm giá có giá trị cao và voucher dịch vụ hấp dẫn. Tiếp đến là Shopee Mum's Club với các ưu đãi độc quyền từ các thương hiệu lớn như Enfa; Friso; Pampers...cho các mẹ bỉm sữa đăng ký làm thành viên. Hãy truy cập ngay Shopee.vn hoặc tải ngay ứng dụng Shopee về điện thoại ngay hôm nay!
                        </div>
                    </div>

                    <hr className="footer__line__hr"/>
                    
                </div>

                <div className="footer__container">
                    <div className="customer__services">
                        <h5 className="footer_title">CHĂM SÓC KHÁCH HÀNG</h5>
                        <a href="hello" className="footer__opt">Trung Tâm Trợ Giúp</a>
                        <a href="hello" className="footer__opt">Shopee Blog</a>
                        <a href="hello" className="footer__opt">Shopee Mall</a>
                        <a href="hello" className="footer__opt">Hướng Dẫn Mua Hàng</a>
                        <a href="hello" className="footer__opt">Hướng Dẫn Bán Hàng</a>
                        <a href="hello" className="footer__opt">Thanh Toán</a>
                        <a href="hello" className="footer__opt">Shopee Xu</a>
                        <a href="hello" className="footer__opt">Vận Chuyển</a>
                        <a href="hello" className="footer__opt">Trả Hàng {"&"} Hoàn Tiền</a>
                        <a href="hello" className="footer__opt">Chăm Sóc Khách Hàng</a>
                        <a href="hello" className="footer__opt">Chính Sách Bảo Hành</a>
                    </div>
                    <div className="about__shopee">
                        <h5 className="footer_title">VỀ SHOPEE</h5>
                        <a href="hello" className="footer__opt">Giới Thiệu Về Shopee Việt Nam</a>
                        <a href="hello" className="footer__opt">Tuyển Dụng</a>
                        <a href="hello" className="footer__opt">Điều Khoản Shopee</a>
                        <a href="hello" className="footer__opt">Chính Sách Bảo Mật</a>
                        <a href="hello" className="footer__opt">Chính Hãng</a>
                        <a href="hello" className="footer__opt">Kênh Người Bán</a>
                        <a href="hello" className="footer__opt">Flash Sales</a>
                        <a href="hello" className="footer__opt">Chương Trình Tiếp Thị Liên Kết Shopee</a>
                        <a href="hello" className="footer__opt">Liên Hệ Với Truyền Thông</a>
                    </div>
                    <div className="payment__method">
                        <h5 className="footer_title">THANH TOÁN</h5>
                    </div>
                    <div className="shipping__unit">
                        <h5 className="footer_title">ĐƠN VỊ VẬN CHUYỂN</h5>
                    </div>
                    <div className="social__media">
                        <h5 className="footer_title">THEO DÕI CHÚNG TÔI TRÊN</h5>
                        <div className="social__media__content">
                            <FontAwesomeIcon icon={faFacebook} color="black" size="2x" className="social__icon"/>
                            <a href="hello" className="social__link">Facebook</a>
                        </div>
                        <div className="social__media__content">
                            <FontAwesomeIcon icon={faInstagram} color="black" size="2x" className="social__icon"/>
                            <a href="hello" className="social__link">Instagram</a>
                        </div>
                        <div className="social__media__content">
                            <FontAwesomeIcon icon={faLinkedin} color="black" size="2x" className="social__icon"/>
                            <a href="hello" className="social__link">LinkedLn</a>
                        </div>

                    </div>
                    <div className="download__app">
                        <h5 className="footer_title">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h5>
                        <div>
                            <div className="app__qrcode"></div>
                            <div className="store__list">

                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="footer__right">
                    <div className="footer__right__reverse">
                        © 2021 Shopee. Tất cả các quyền được bảo lưu.
                    </div>
                    <div className="footer__right__region">
                        Quốc gia {"&"} Khu vực:
                        <a href="hello" className="region">Singapore</a> 
                        |
                        <a href="hello" className="region">Indonesia</a> 
                        |
                        <a href="hello" className="region">Đài Loan</a>
                        |
                        <a href="hello" className="region">Thái Lan</a>
                        |
                        <a href="hello" className="region">Malaysia</a>
                        |
                        <a href="hello" className="region">Việt Nam</a>
                        |
                        <a href="hello" className="region">Philippines</a>
                        |
                        <a href="hello" className="region">Brazil</a>
                    </div>
                </div>

                <div className="footer__block">
                    <div className="footer__policy">
                        <div className="footer__policy__list">
                            <a href="hello" className="policy">CHÍNH SÁCH BẢO MẬT</a>
                            <a href="hello" className="policy">QUY CHẾ HOẠT ĐỘNG</a>
                            <a href="hello" className="policy">CHÍNH SÁCH VẬN CHUYỂN</a>
                            <a href="hello" className="policy">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</a>
                        </div>
                    </div>

                    <p className="footer__company__name">Công ty TNHH Shopee</p>

                    <div className="footer__contact">
                        <p>
                            Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn 
                        </p>
                        <p>
                            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch {"&"} Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
                        </p>
                        <p>
                            © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
                        </p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Footer