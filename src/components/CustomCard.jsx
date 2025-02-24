
import { Card } from 'antd';
import PropTypes from 'prop-types';
import './CardComponent.css';

const CustomCard = ({ header, body, footer }) => {
    return (
        <Card className="custom-card">
            {header && (
                <div className="custom-card-header">
                    {header}
                </div>
            )}
            <div className="custom-card-body">
                {body}
            </div>
            {footer && (
                <div className="custom-card-footer">
                    {footer}
                </div>
            )}
        </Card>
    );
};

CustomCard.propTypes = {
    header: PropTypes.node,
    body: PropTypes.node.isRequired,
    footer: PropTypes.node
};

export default CustomCard;