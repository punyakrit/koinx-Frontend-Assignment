function TeamCard() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
      <div>
        <div className="text-2xl text-[#0F1629] font-semibold">Team</div>
        <div className="text-[#3E424A] text-[16px] font-medium my-4 pt-2">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        <div className="">
          <Card
            name="John Smith"
            des="Designation here"
            link="https://s3-alpha-sig.figma.com/img/4612/91fa/f3f7c54a3f2de230e1912a46193c019c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWhkWY0ymnH1NiLvSHmxRYtlJ5phA2WjdDIraFpgytQzkZ89RlUPh~2zissn~5hAVow5WpKMEPVob5Gt423VtCBwqYlyU45kaw9w-day36O1ZpDe1KMjMMDhoVJ35kPvGgXXR2eoVhjNVcVWAc3KTGh5SZhRVYqtpoih2SmEye7jFqlGlxWaDMr1XmFajSnX2EFfGN7tZP5IoTYH-sgyqIeYH0UCSRhnmfr8kwV86NmTXY2ZUFhVf2~W7TEtbDoWXztzvi5twaNI4Bv6lrLgUCovNL91d7vh9rlnZQdMSI79DuIaZjniKVKqWksnLLV~F2x8sy~GbRLGZqX0A7PTpA__"
          />
          <Card
            name="Elina Williams"
            des="Designation here"
            link="https://s3-alpha-sig.figma.com/img/4316/c574/4cca8e430c2d9f50e72234abc8fd1c0c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jUnx4pEpHDP86AqX4C4LeBbKl8nTXgOiKUaNxSKbr91dmGAECOGF0g~XtM5ImutaSsJd6uuszDw6zkHHr9LZq9xxCL7wXDuuWUzvKfD33neNOFbKaeWBRVrQEG7X1VJy-lSViiTU32cI3RTOUogS5mpo8pAToaDB2F74Wn~IL34QElejmtey-mpAxJ2T2SCSBWohzJGGWNkpGO6wivCDR-cU13T34QGUq-tgRM5yNCRqOePc0wO7QJvwIBKs7zV1RjqLZpRYzrCobbRLnZfb9DL3A9EDchYioriZZ9D8Qq8IRu8hGJt0k0n52QegNVHBBVhf7F75LNBnsPB-S~WPhA__"
          />
          <Card
            name="John Smith"
            des="Designation here"
            link="https://s3-alpha-sig.figma.com/img/c5f0/f097/f060c63093179c9aa8c4ce86a8cac7f7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0TvWkMEpvzWqu3lgSFfn0Cql-W2UPXvIp37Eg58U~jiurGPZoGCpKF81agPfRd2xJ8yG~y9g4x4oOQHjnaklWF-GbwnZz6C5huv0JJd9YZ9u-yHY3pjm5QNg7c-jQY3v6IHQpR1OAY5SmH1i88J6qQQr62qN8I5GVr~qUEQREK9NcscfAE8IWVoqb8laxX99Er2y0bQGvBiJQkVtpKs~wa~Rx05-1MBUHqU4q5bDeeoe4z81IQKSZdU1QJUMM-6XF87IeSF-~y2Tihn7PGmJnO6Hbhuxj9deZLsCoC4sgF3o0VY8eA2pxvOhMe6lfREEUPRik9zSkRy2bDebXMJuQ__"
          />
        </div>
      </div>
    </div>
  );
}

function Card({ name, link, des }: any) {
  return (
    <div className="md:flex bg-[#E8F4FD] rounded-lg py-4 md:px-8 my-6">
      <div className="justify-center flex flex-col items-center">
        <div>
          <img className="rounded-xl w-44 lg:w-96" src={link} alt="" />
        </div>
        <div className="text-[#0F1629] text-[15px] font-semibold py-1">
          {name}
        </div>
        <div className="text-[#788F9B] text-xs font-medium">{des}</div>
      </div>
      <div className="flex justify-center items-center px-4 ml-4 text-[#0F1629] text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </div>
    </div>
  );
}

export default TeamCard;
