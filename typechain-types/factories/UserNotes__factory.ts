/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UserNotes, UserNotesInterface } from "../UserNotes";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "Pushed",
    type: "event",
  },
  {
    inputs: [],
    name: "allowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getData",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "parentContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newData",
        type: "string",
      },
    ],
    name: "pushData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setAllowance",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a78806100a16000396000f3fe6080604052600436106100555760003560e01c806306b1efe51461005a578063230b9da3146100835780633bc5de30146100ae5780638da5cb5b146100d95780639c315aa814610104578063de242ff41461010e575b600080fd5b34801561006657600080fd5b50610081600480360381019061007c91906104b9565b610139565b005b34801561008f57600080fd5b50610098610220565b6040516100a59190610547565b60405180910390f35b3480156100ba57600080fd5b506100c3610246565b6040516100d091906105f2565b60405180910390f35b3480156100e557600080fd5b506100ee610366565b6040516100fb9190610547565b60405180910390f35b61010c61038a565b005b34801561011a57600080fd5b50610123610437565b604051610130919061062f565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101be90610696565b60405180910390fd5b8181600291826101d8929190610906565b503373ffffffffffffffffffffffffffffffffffffffff167f283c51e92677f6fd7f21a0c8a96e385ed87e54a8be7082dc857c6b354874ec1c60405160405180910390a25050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cd90610696565b60405180910390fd5b600280546102e39061071f565b80601f016020809104026020016040519081016040528092919081815260200182805461030f9061071f565b801561035c5780601f106103315761010080835404028352916020019161035c565b820191906000526020600020905b81548152906001019060200180831161033f57829003601f168201915b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461041a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041190610a22565b60405180910390fd5b6001600360006101000a81548160ff021916908315150217905550565b600360009054906101000a900460ff1681565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261047957610478610454565b5b8235905067ffffffffffffffff81111561049657610495610459565b5b6020830191508360018202830111156104b2576104b161045e565b5b9250929050565b600080602083850312156104d0576104cf61044a565b5b600083013567ffffffffffffffff8111156104ee576104ed61044f565b5b6104fa85828601610463565b92509250509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061053182610506565b9050919050565b61054181610526565b82525050565b600060208201905061055c6000830184610538565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561059c578082015181840152602081019050610581565b60008484015250505050565b6000601f19601f8301169050919050565b60006105c482610562565b6105ce818561056d565b93506105de81856020860161057e565b6105e7816105a8565b840191505092915050565b6000602082019050818103600083015261060c81846105b9565b905092915050565b60008115159050919050565b61062981610614565b82525050565b60006020820190506106446000830184610620565b92915050565b7f796f757265206e6f7420616c6c6f77656420746f20646f207468697321000000600082015250565b6000610680601d8361056d565b915061068b8261064a565b602082019050919050565b600060208201905081810360008301526106af81610673565b9050919050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061073757607f821691505b60208210810361074a576107496106f0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026107b27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610775565b6107bc8683610775565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006108036107fe6107f9846107d4565b6107de565b6107d4565b9050919050565b6000819050919050565b61081d836107e8565b6108316108298261080a565b848454610782565b825550505050565b600090565b610846610839565b610851818484610814565b505050565b5b818110156108755761086a60008261083e565b600181019050610857565b5050565b601f8211156108ba5761088b81610750565b61089484610765565b810160208510156108a3578190505b6108b76108af85610765565b830182610856565b50505b505050565b600082821c905092915050565b60006108dd600019846008026108bf565b1980831691505092915050565b60006108f683836108cc565b9150826002028217905092915050565b61091083836106b6565b67ffffffffffffffff811115610929576109286106c1565b5b610933825461071f565b61093e828285610879565b6000601f83116001811461096d576000841561095b578287013590505b61096585826108ea565b8655506109cd565b601f19841661097b86610750565b60005b828110156109a35784890135825560018201915060208501945060208101905061097e565b868310156109c057848901356109bc601f8916826108cc565b8355505b6001600288020188555050505b50505050505050565b7f6e6f7420616c6c6f776564000000000000000000000000000000000000000000600082015250565b6000610a0c600b8361056d565b9150610a17826109d6565b602082019050919050565b60006020820190508181036000830152610a3b816109ff565b905091905056fea2646970667358221220df08fd366bbfdebe4165834fb55959a738075729893e63e7302ddc6268851b5964736f6c63430008110033";

type UserNotesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserNotesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserNotes__factory extends ContractFactory {
  constructor(...args: UserNotesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UserNotes> {
    return super.deploy(overrides || {}) as Promise<UserNotes>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UserNotes {
    return super.attach(address) as UserNotes;
  }
  override connect(signer: Signer): UserNotes__factory {
    return super.connect(signer) as UserNotes__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserNotesInterface {
    return new utils.Interface(_abi) as UserNotesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserNotes {
    return new Contract(address, _abi, signerOrProvider) as UserNotes;
  }
}
