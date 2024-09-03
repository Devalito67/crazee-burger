import styled from "styled-components";

export default function AdminImagePreview({imageSource}) {
    return <AdminImagePreviewStyled>
        {imageSource ? <img src={imageSource} alt="imageProduct preview" /> : <div className = "emptyImage">
          Aucune Image</div>}
    </AdminImagePreviewStyled>
}

const AdminImagePreviewStyled = styled.div`
    display: flex;
    flex-shrink: 0;
    width: 215px;
    height: 120px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .emptyImage {
        display: flex;
        color: #93A2B1;
        border: 1px solid #E4E5E9;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
`;
