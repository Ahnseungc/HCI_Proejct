import {
  SignUpSettingSchoolNameLayout,
  SignUpSettingSchoolNameText,
  SignUpSettingSchoolNameLabelForm,
  SignUpSettingSchoolNameLabel,
  SignUpSettingSchoolDoubleMajorLabel,
} from "./styles";
import Heading from "@atom/Heading";
import Button from "@atom/Button";
import Input from "@atom/Input";
import Text from "@atom/Text";
import SignUpHeader from "@organisms/SignUp/SignUpHeader";

const SignUpSettingMajor = () => {
  return (
    <SignUpSettingSchoolNameLayout>
      <SignUpHeader />
      <SignUpSettingSchoolNameText>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          학번과 학과를
        </Heading>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          설정해주세요
        </Heading>
      </SignUpSettingSchoolNameText>
      <SignUpSettingSchoolNameLabelForm>
        <SignUpSettingSchoolNameLabel>
          <label htmlFor="StudentID">
            <Text fontSize="15px" fontWeight="500" color="rgba(99, 99, 99, 1)">
              학번을 설정해주세요
            </Text>
          </label>
          <Input
            placeholder={"학번(4글자)"}
            readonly={false}
            disabled={false}
            value={""}
            error={""}
            id="StudentID"
            type={"text"}
            inputtype={"text"}
          />
        </SignUpSettingSchoolNameLabel>
        <SignUpSettingSchoolDoubleMajorLabel>
          <label htmlFor="DoubleMajor">
            <Text fontSize="15px" fontWeight="500" color="rgba(99, 99, 99, 1)">
              복수전공이 있다면 함께 기입해주세요 :D
            </Text>
          </label>
          <Input
            placeholder={"전공명 / 복수전공(부전공)"}
            readonly={false}
            disabled={false}
            value={""}
            error={""}
            id="DoubleMajor"
            type={"text"}
            inputtype={"text"}
          />
        </SignUpSettingSchoolDoubleMajorLabel>

        <Button
          content="계속하기"
          type="button"
          buttontype="largebutton"
          disabled={false}
          onClick={() => null}
        />
      </SignUpSettingSchoolNameLabelForm>
    </SignUpSettingSchoolNameLayout>
  );
};

export default SignUpSettingMajor;