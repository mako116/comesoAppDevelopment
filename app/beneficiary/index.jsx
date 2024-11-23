import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import BeneficiaryModal from "../../components/BeneficiaryModal";
import AddBeneficiaryModal from "../../components/AddBeneficiaryModa";
import Confirmation1Modal from "../../components/Confirmation1Modal";
import Confirmation2Modal from "../../components/Confirmation2Modal";

const Beneficiary = () => {
  const [beneficiaries, setBeneficiaries] = useState([
    {
      name: "Will Hopper",
      phone: "0904455588",
      avatar: require("../../assets/images/will.png"),
    },
    {
      name: "Jonathan",
      phone: "0909948485",
      avatar: require("../../assets/images/jonathan.png"),
    },
    {
      name: "Dr Kamal",
      phone: "0909948485",
      avatar: require("../../assets/images/kamal.png"),
    },
    {
      name: "Will Hopper",
      phone: "0904455588",
      avatar: require("../../assets/images/will.png"),
    },
    {
      name: "Jonathan",
      phone: "0909948485",
      avatar: require("../../assets/images/jonathan.png"),
    },
    {
      name: "Dr Kamal",
      phone: "0909948485",
      avatar: require("../../assets/images/kamal.png"),
    },
    {
      name: "Will Hopper",
      phone: "0904455588",
      avatar: require("../../assets/images/will.png"),
    },
    {
      name: "Jonathan",
      phone: "0909948485",
      avatar: require("../../assets/images/jonathan.png"),
    },
    {
      name: "Dr Kamal",
      phone: "0909948485",
      avatar: require("../../assets/images/kamal.png"),
    },
    // Add more as needed...
  ]);
  const [modalData, setModalData] = useState({
    image: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [openAddBeneficiary, setOpenAddBeneficiary] = useState(false);
  const [openfirstConfirmation, setOpenFirstConfirmation] = useState(false);
  const [openSecondConfirmation, setOpenSecondConfirmation] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);
  const toggleAddBenModal = () => setOpenAddBeneficiary(!setOpenAddBeneficiary);
  const toggleFirstConfirmation = () =>
    setOpenFirstConfirmation(!openfirstConfirmation);
  const toggleSecondConfirmation = () =>
    setOpenSecondConfirmation(!openSecondConfirmation);

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: "5%" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <CustomHeader text="Beneficiary" />
        <View style={{ marginTop: "5%" }}>
          <View style={{ position: "absolute", top: "30%", left: "10%" }}>
            <EvilIcons name="search" size={24} color="gray" />
          </View>
          <TextInput
            style={{
              color: "rgba(164, 169, 174, 0.25)",
              width: "90%",
              height: 50,
              paddingHorizontal: 50,
              alignSelf: "center",
              borderRadius: 10,
              fontSize: 18,
              backgroundColor: "rgba(164, 169, 174, 0.25)",
            }}
            placeholder="search"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
              marginLeft: "5%",
            }}
          >
            Beneficiaries
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "3%",
              marginHorizontal: "2%",
            }}
          >
            {beneficiaries.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: "30%",
                  backgroundColor: "white",
                  shadowColor: "#171717",
                  shadowOffset: { width: -2, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 5,
                  marginBottom: 5,
                  borderRadius: 10,
                  padding: 10,
                  alignItems: "center",
                }}
                onPress={() => {
                  setModalData({
                    image: item.avatar,
                  });
                  setOpenModal(true);
                }}
              >
                <Image
                  source={item.avatar}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    marginTop: 10,
                    textAlign: "center",
                    color: "rgba(164, 169, 174, 1)",
                    fontSize: 13,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "rgba(164, 169, 174, 1)",
                    fontSize: 13,
                  }}
                >
                  {item.phone}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: "80%",
            backgroundColor: "rgba(10, 46, 226, 1)",
            height: 60,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 20,
          }}
          onPress={() => setOpenAddBeneficiary(true)}
        >
          <AntDesign
            name="pluscircleo"
            size={24}
            color="white"
            style={{ position: "absolute", top: "27%", left: "18%" }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginLeft: 10,
            }}
          >
            Add Beneficiary
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {openModal && (
        <BeneficiaryModal toggleModal={toggleModal} image={modalData.image} />
      )}
      {openAddBeneficiary && (
        <AddBeneficiaryModal
          toggleModal={toggleAddBenModal}
          openFirstConfirm={toggleFirstConfirmation}
        />
      )}
      {openfirstConfirmation && (
        <Confirmation1Modal
          toggleModal={toggleFirstConfirmation}
          openSecondConfirm={toggleSecondConfirmation}
          image={modalData.image}
        />
      )}
      {openSecondConfirmation && (
        <Confirmation2Modal toggleModal={toggleSecondConfirmation} />
      )}
    </SafeAreaView>
  );
};

export default Beneficiary;
